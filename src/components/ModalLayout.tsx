import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ModalLayoutProps = {
  open: boolean;
  title: string;
  description?: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function ModalLayout({
  open,
  title,
  description = "",
  children,
  onClose,
}: ModalLayoutProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="rounded-2xl border border-[#454A5C] bg-[#1F2129] p-6 shadow-[0px_8px_16px_0px_#00000066]">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium tracking-[-0.015em] text-white">
            {title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>{description}</DialogDescription>
        <div className="flex-center">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
