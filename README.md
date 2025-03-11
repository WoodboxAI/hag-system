# HAG-System

**Hardware-Aware GPU-Plattform mit Agentenintegration**

## Übersicht

Das HAG-System ist eine fortschrittliche Plattform, die Hardware-Monitoring mit agentenbasierter Arbeitsverteilung, Reasoning-Komponenten und Embedding-Workflow-Management verbindet. Es ermöglicht die effiziente Nutzung von GPU-Ressourcen für KI-Workloads und bietet gleichzeitig ein umfassendes Monitoring und Management von Hardwarekomponenten.

## Hauptkomponenten

### 1. Hardware-Monitoring

- Echtzeit-Überwachung von GPU, CPU, Speicher und Netzwerk
- Erweiterte Metriken und Visualisierungen
- Schwellenwert-basierte Alarme und Benachrichtigungen

### 2. Agenten-Framework

- **Agent Factory**: Erstellung und Konfiguration spezialisierter Agenten
- **Monitoring**: Echtzeit-Überwachung von Agentenaktivitäten und Ressourcennutzung
- **Workflow-Integration**: Visualisierung und Management von Arbeitsabläufen
- **Reasoning**: Konfigurierbare Reasoning-Komponenten mit verschiedenen Modi und Niveaus
- **Knowledge Integration**: Verknüpfung mit Wissensdatenbanken und Embeddings

### 3. Embedding-System

- Extraktion von Embeddings aus verschiedenen Datenquellen
- Qualitätsverbesserung durch Agenteninteraktion
- Kontinuierliche Optimierung und Aktualisierung

## Technischer Stack

- **Frontend**: React mit Material-UI
- **Backend**: Node.js/TypeScript
- **Datenbank**: Supabase/PostgreSQL
- **Parallelisierung**: MCP-Server für verteilte Verarbeitung

## Installation

```bash
# Repository klonen
git clone https://github.com/WoodboxAI/hag-system.git
cd hag-system

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

## Voraussetzungen

- Node.js v14+
- npm v7+
- Moderne GPU (NVIDIA empfohlen für volle Funktionalität)
- 16GB+ RAM für optimale Leistung

## Lizenz

MIT