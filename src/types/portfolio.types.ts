export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    heading?: string;
}
export type Experience = {
    title: string;
    company: string;
    duration: string;
    description: string;
    _id: string;
}
export interface ExperienceProps {
    experience: Experience
}