import { useState, useEffect } from 'react';
import { Project } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, ArrowRight, Mail } from 'lucide-react';
import { AnimatedContainer, BgGradient } from '@/components/ui/hero-animated';
import ProjectNav from '@/components/ProjectNav';

interface ProjectProtectionProps {
    project: Project;
    children: React.ReactNode;
}

const ProjectProtection = ({ project, children }: ProjectProtectionProps) => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        // If not protected, always unlocked
        if (!project.isProtected) {
            setIsUnlocked(true);
            return;
        }

        // Check session storage
        const hasAccess = sessionStorage.getItem(`access_granted_${project.id}`);
        if (hasAccess === 'true') {
            setIsUnlocked(true);
        }
    }, [project.id, project.isProtected]);

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        // Hardcoded password for now, as per plan
        if (password === 'design2025') {
            setIsUnlocked(true);
            setError(false);
            sessionStorage.setItem(`access_granted_${project.id}`, 'true');
        } else {
            setError(true);
        }
    };

    if (isUnlocked) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-neon-cyan/30 flex flex-col">
            <ProjectNav />

            <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]" />
                </div>
                <BgGradient className="opacity-10" />

                <AnimatedContainer className="max-w-md w-full relative z-10">
                    <div className="frosted-card p-8 md:p-10 rounded-3xl border-primary/10 shadow-2xl shadow-primary/5 text-center space-y-8">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/20 flex items-center justify-center mx-auto shadow-inner">
                            <Lock className="w-10 h-10 text-primary" />
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Protected Case Study</h1>
                            <p className="text-muted-foreground leading-relaxed">
                                This project (<span className="font-semibold text-foreground">{project.title}</span>) contains sensitive information. Please enter the password to view.
                            </p>
                        </div>

                        <form onSubmit={handleUnlock} className="space-y-4">
                            <div className="space-y-2 text-left">
                                <Input
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError(false);
                                    }}
                                    className={`h-12 bg-secondary/50 border-input transition-all ${error ? 'border-destructive ring-destructive/20' : 'focus:border-primary'}`}
                                />
                                {error && <p className="text-sm text-destructive font-medium px-1">Incorrect password</p>}
                            </div>

                            <Button type="submit" className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
                                Unlock Case Study <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </form>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-border/50" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">Or</span>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            className="w-full h-11 border-primary/20 hover:bg-primary/5 hover:text-primary hover:border-primary/50"
                            onClick={() => window.location.href = `mailto:ezapata.nyc@gmail.com?subject=Access Request: ${project.title}`}
                        >
                            <Mail className="w-4 h-4 mr-2" />
                            Request Access
                        </Button>
                    </div>
                </AnimatedContainer>
            </main>
        </div>
    );
};

export default ProjectProtection;
