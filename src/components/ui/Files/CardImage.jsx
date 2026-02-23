import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardImage({
  title,
  description,
  image,
  badge = "Featured",
  datatotoggle
}) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden ">
      <div className="absolute inset-0 z-30 aspect-video   bg-black/35" />

      <img
        src={image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full   object-contains "
      />

      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{badge}</Badge>
        </CardAction>

        <CardTitle className='line-clamp-2'>{title}</CardTitle>

        <CardDescription className='line-clamp-4'>
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className="w-full cursor-pointer"  onClick={() => window.open((datatotoggle))} >Read More </Button>
      </CardFooter>
    </Card>
  )
}