export type Page = 'home' | 'upload' | 'detection' | 'design' | 'furniture' | 'export' | 'settings' | 'notfound';

export interface FloorPlanData {
  file: File;
  preview: string | null;
}
