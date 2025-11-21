export type Page = 'home' | 'upload' | 'detection' | 'design' | 'furniture' | 'export' | 'settings';

export interface FloorPlanData {
  file: File;
  preview: string | null;
}
