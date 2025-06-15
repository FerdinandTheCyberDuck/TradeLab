import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import Cookies from 'js-cookie'
import axios from 'axios'

interface User {
  id: string
  email: string
  username: string
  full_name: string | null
  is_active: boolean
}

interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  
  setTokens: (accessToken: string, refreshToken: string) => void
  setUser: (user: User) => void
  logout: () => void
  checkAuth: () => Promise<void>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: true,

      setTokens: (accessToken: string, refreshToken: string) => {
        Cookies.set('access_token', accessToken, { expires: 1 })
        Cookies.set('refresh_token', refreshToken, { expires: 7 })
        set({ accessToken, refreshToken, isAuthenticated: true })
      },

      setUser: (user: User) => {
        set({ user })
      },

      logout: () => {
        Cookies.remove('access_token')
        Cookies.remove('refresh_token')
        set({ 
          user: null, 
          accessToken: null, 
          refreshToken: null, 
          isAuthenticated: false 
        })
      },

      checkAuth: async () => {
        const accessToken = Cookies.get('access_token')
        const refreshToken = Cookies.get('refresh_token')
        
        if (!accessToken || !refreshToken) {
          set({ isLoading: false, isAuthenticated: false })
          return
        }

        try {
          const response = await axios.get('http://localhost:8000/api/v1/users/me', {
            headers: { Authorization: `Bearer ${accessToken}` }
          })
          
          set({ 
            user: response.data, 
            accessToken, 
            refreshToken, 
            isAuthenticated: true, 
            isLoading: false 
          })
        } catch (error) {
          get().logout()
          set({ isLoading: false })
        }
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        accessToken: state.accessToken,
        refreshToken: state.refreshToken 
      })
    }
  )
)
