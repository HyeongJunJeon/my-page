"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

type ModalLayoutProps = {
  open: boolean;
  title: string;
  description?: string;
  children: React.ReactNode;
  onClose?: () => void;
};

export default function ModalLayout({
  open,
  title,
  description = "",
  children,
  onClose,
}: ModalLayoutProps) {
  const router = useRouter();

  const handleDialogClose = () => {
    if (onClose) return onClose();

    // intercepting routes를 통해 모달 구현 시 close 동작은 경로를 이전으로 이동하는 것으로 대체
    router.back();
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="h-5/6 max-w-5xl overflow-auto">
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
