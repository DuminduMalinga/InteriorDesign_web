export type Page = 'home' | 'upload' | 'detection' | 'design' | 'export';

export interface FloorPlanData {
  file: File;
  preview: string | null;
}
