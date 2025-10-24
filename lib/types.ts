export type Role = 'admin' | 'member' | 'guest';
export type Visibility = 'members' | 'guests';

export interface Member { id: string; name: string; email: string; role: Role; avatarUrl?: string; createdAt: string; }
export interface Season { id: string; year: number; title: string; description?: string; coverImage?: string; events: string[]; }
export interface Event { id: string; seasonId: string; title: string; date: string; location: string; routeMap?: { staticImageUrl?: string; gpx?: string; }; coverImage?: string; gallery: string[]; recapThread: string[]; visibility: Visibility; createdBy: string; }
export interface Stats { distance?: number; time?: number; pace?: string; elevation?: number; }
export interface Post { id: string; type: 'event_recap' | 'solo_run'; memberId: string; eventId?: string; title: string; body: string; photos: string[]; stravaUrl?: string; gpxFile?: string; stats?: Stats; visibility: Visibility; createdAt: string; }
