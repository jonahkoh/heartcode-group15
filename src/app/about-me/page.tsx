"use client"


import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, GraduationCap, Heart, Laptop, Cat, Coffee } from "lucide-react"

export default function KohWenBaoProfile() {
  const [currentCatIndex, setCurrentCatIndex] = useState(0)

 

  return (
    <div className="min-h-screen bg-[url('/dancingcat.gif')] p-4 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCatIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-cover bg-center"
          
        />
      </AnimatePresence>
      <Card className="w-full max-w-4xl backdrop-blur-md bg-white/30 shadow-xl overflow-hidden relative z-10">
        <CardHeader className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-75" />
          <CardTitle className="text-4xl font-bold text-center text-white relative z-10">Koh Wen Bao</CardTitle>
          <CardDescription className="text-center text-white relative z-10 text-lg">Coder | Student | Cat Lover</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/50">
              <TabsTrigger value="about">About Me</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
            </TabsList>
            <div className="mt-4 p-4 bg-white/50 rounded-md">
              <TabsContent value="about">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><Code className="mr-2" /> About Me</h2>
                <p className="mb-4">
                  Hello! I am Wen Bao, a passionate coder and Information Systems student at Singapore Management University. 
                  I love turning complex problems into elegant solutions through code. When I am not immersed in lines of 
                  code, you will likely find me cuddling with cats or exploring the latest tech trends.
                </p>
              </TabsContent>
              <TabsContent value="education">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><GraduationCap className="mr-2" /> Education</h2>
                <p className="mb-4">
                  <strong>Singapore Management University</strong><br />
                  Major: Information Systems<br />
                  Expected Graduation: 2028
                </p>
                <p>
                  At SMU, I'm honing my skills in various aspects of information technology, from database management 
                  to software engineering. The hands-on approach and collaborative environment at SMU have been instrumental 
                  in shaping my technical and soft skills.
                </p>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><Laptop className="mr-2" /> Skills</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Programming Languages: Python, Bash</li>
                  <li>Web Development: Javascript</li>
                  <li>Database Management: </li>
                  <li>Cloud Technologies: Certified AWS Cloud Practitioner </li>
                  <li>Version Control: Git</li>
                  <li>Problem Solving and Analytical Thinking</li>
                </ul>
              </TabsContent>
              <TabsContent value="interests">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><Heart className="mr-2" /> Interests</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li><Cat className="inline mr-2" /> Cats (obviously!)</li>
                  <li><Code className="inline mr-2" /> Coding personal projects</li>
                  <li><Coffee className="inline mr-2" /> Exploring new cafes</li>
                  
                </ul>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between items-center bg-white/30 backdrop-blur-sm">
          <p className="text-sm text-gray-600">© 2024 Koh Wen Bao</p>

        </CardFooter>
      </Card>
    </div>
  )
}