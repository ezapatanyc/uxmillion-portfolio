import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface CaseStudyPasswordDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  caseStudyUrl: string;
  title: string;
}

const CaseStudyPasswordDialog = ({
  isOpen,
  onOpenChange,
  caseStudyUrl,
  title,
}: CaseStudyPasswordDialogProps) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const correctPassword = "preview2024";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      onOpenChange(false);
      navigate(caseStudyUrl);
      window.scrollTo(0, 0);
      setPassword("");
    } else {
      toast({
        title: "Incorrect password",
        description: "Please try again or contact for access.",
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    setPassword("");
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Protected Case Study</DialogTitle>
          <DialogDescription>
            This case study is password protected. Enter the password to view "{title}".
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              autoFocus
            />
          </div>
          
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button type="submit">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyPasswordDialog;
