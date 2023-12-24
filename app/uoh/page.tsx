import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Seggs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Card>
            <CardHeader>
                <CardTitle>What am I doing with my life...</CardTitle>
                <CardDescription>This is the worst website ever</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
                <Input placeholder="Nya~! :3"/>
                <Separator />
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Jug Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="monk">Monk</SelectItem>
                        <SelectItem value="monke">Monke</SelectItem>
                        <SelectItem value="mmm">MMM</SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex items-center space-x-2">
                    <Toggle className="w-full">Seggs</Toggle>
                    <Toggle className="w-full">Segs</Toggle>
                    <Toggle className="w-full">Seg</Toggle>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox />
                    <Label>Seggs?</Label>
                </div>
                <Separator />
                <Slider defaultValue={[22]} max={100} step={1} />
                <div className="flex items-center space-x-2">
                    <Switch />
                    <Label>Seggs</Label>
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="amo">
                        <AccordionTrigger>What am I doing?</AccordionTrigger>
                        <AccordionContent>
                        YOU AHAHAHAUHFISHKDJNFSDSD
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
            <CardFooter>
                <Button className="w-full">This does nothing!</Button>
            </CardFooter>
        </Card>
    </main>
  )
}