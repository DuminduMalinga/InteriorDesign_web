export type Page = 'home' | 'upload' | 'detection' | 'design' | 'furniture' | 'export';

export interface FloorPlanData {
  file: File;
  preview: string | null;
}
