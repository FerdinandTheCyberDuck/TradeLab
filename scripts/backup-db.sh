#!/bin/bash
# Backup PostgreSQL database

BACKUP_DIR="backups/$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR

echo "Backing up PostgreSQL..."
docker exec tradelab-postgres pg_dump -U tradelab tradelab > "$BACKUP_DIR/tradelab.sql"

echo "✅ Database backed up to $BACKUP_DIR"
