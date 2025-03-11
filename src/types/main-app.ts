/**
 * Haupttypdefinitionen für die HAG-System Anwendung
 */

export interface Agent {
  id: string;
  name: string;
  type: AgentType;
  status: 'active' | 'inactive';
  description?: string;
  capabilities: string[];
  created_at: string;
}

export type AgentType = 'researcher' | 'analyst' | 'worker' | 'orchestrator';

export interface Team {
  id: string;
  name: string;
  agents: Agent[];
  created_at: string;
  description?: string;
}

export interface HardwareMetrics {
  cpu: {
    usage: number;
    temperature: number;
    clockSpeed: number;
  };
  memory: {
    total: number;
    used: number;
    free: number;
  };
  gpu: {
    usage: number;
    temperature: number;
    memoryUsed: number;
    memoryTotal: number;
  }[];
  timestamp: string;
}

export interface SystemStatus {
  status: 'healthy' | 'warning' | 'critical' | 'offline';
  activeAgents: number;
  activeTasks: number;
  lastUpdated: string;
}