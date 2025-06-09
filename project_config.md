# project_config.md

Last-Updated: 6/8/2025

## Project Goal

Describe the primary objective of your project in 1-2 sentences.

## Tech Stack

- **Languages:**
  Python 3.11 - Backend, strategy execution, data processing
  TypeScript 5.3 - Frontend type safety
  JavaScript - Frontend runtime
- **Frameworks:**
  FastAPI 0.109 - Async backend API framework
  Next.js 14 - React framework for frontend
  React 18 - UI components
  SQLAlchemy 2.0 - Database ORM
- **Databases:**
  PostgreSQL 15 - Primary database
  TimescaleDB - Time-series data extension (to be added)
  Redis 7 - Caching, real-time data, pub/sub
- **Build / Tooling:**
  Docker/Docker Compose - Containerization & local development
  Node.js 18 - Frontend toolchain
  npm/pnpm - Package management
  uvicorn - ASGI server for FastAPI
  Git - Version control
  VS Code - Primary IDE
- **Key Libraries (Planned):**
  React Flow - Node-based visual editor
  D3.js - Data visualizations
  Three.js - 3D visualizations
  Socket.io - Real-time WebSocket communication
  Pandas/NumPy - Data analysis
  Kafka - Market data streaming (future)

## Critical Patterns & Conventions

Architecture Patterns:

Clean Architecture - Separation of concerns (API → Service → Repository → Model)
Repository Pattern - Database abstraction layer
Dependency Injection - FastAPI's built-in DI for services
Event-Driven - WebSocket for real-time updates
CQRS - Separate read/write models for performance (future)

API Conventions:

RESTful Design - Standard HTTP verbs (GET, POST, PUT, DELETE)
API Versioning - /api/v1/ prefix
Consistent Response Format:
python{
"data": {...}, # Actual response data
"error": null, # Error message if any
"metadata": {...} # Pagination, timestamps, etc.
}

Python Conventions:

Style Guide: PEP 8 (enforced by Black formatter)
Type Hints: Required for all functions
Docstrings: Google style for all public functions
File Naming: snake_case.py
Class Naming: PascalCase
Async First: Use async/await for all I/O operations

TypeScript/React Conventions:

Components: Functional components with hooks only
File Naming: PascalCase.tsx for components, camelCase.ts for utilities
Styling: Tailwind CSS utility-first approach
State Management: Zustand for global state, React Query for server state
Props: Explicit interfaces for all component props

Database Conventions:

Table Names: Plural, snake_case (e.g., strategies, user_trades)
Primary Keys: UUID type, named id
Timestamps: created_at, updated_at on all tables
Foreign Keys: {table}\_id format
Indexes: On all foreign keys and frequently queried fields

Git Conventions:

Branch Naming: feature/description, fix/description, refactor/description
Commit Messages: Conventional commits (e.g., feat: add strategy builder, fix: correct backtest calculation)
PR Size: Keep under 400 lines changed when possible

Code Organization:
backend/
app/
api/ # API endpoints
core/ # Config, security, database
models/ # SQLAlchemy models  
 schemas/ # Pydantic models
services/ # Business logic
strategies/ # Strategy execution engine

frontend/
app/ # Next.js app directory
components/ # Reusable UI components
hooks/ # Custom React hooks
lib/ # Utilities and helpers
services/ # API client functions
store/ # State management
types/ # TypeScript type definitions
Testing Standards:

Backend: Pytest with >80% coverage target
Frontend: Jest + React Testing Library
E2E: Playwright for critical user flows
Test Naming: test*should*[expected_behavior]_when_[condition]

## Constraints

- Performance / latency budgets
- Security or compliance requirements
- External APIs with rate limits or cost ceilings

## Tokenization Settings

- Estimated chars-per-token: 3.5
- Max tokens per message: 8 000
- Plan for summary when **workflow_state.md** exceeds ~12 K chars.

---

## Changelog

<!-- The agent prepends the latest summary here as a new list item after each VALIDATE phase -->
