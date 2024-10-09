import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Cat from "@/app/assets/cat.jpg";

export default function AboutMe() {
  return (
    <div>

            Hello world this is the about me route
        
        <Card>
            <CardHeader>
                <CardTitle>
                <p className="font-bold text-5xl text-center">
                    Hello I am wenbao
                </p>   
                </CardTitle>
                <CardDescription>
                    I like to code lots
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={Cat} alt="1"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    wenbao
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
  
    </div>
  );
}