import ProjectPage from "@/app/project/[slug]/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const { id } = await params;

  return (
    <Dialog open={true}>
      <DialogContent className="h-5/6 max-w-5xl overflow-scroll">
        <ProjectPage
          params={{
            slug: id,
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
