import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardImage({
  title,
  description,
  image,
  Source,
  datatotoggle
}) {
  return (
    <Card className="relative mx-auto  max-w-sm pt-0 overflow-hidden ">
      <div className="absolute inset-0 z-30 aspect-video   bg-black/35" />

      <img
        src={image}
        onClick={() => window.open((datatotoggle))}
        alt="Event cover"
        className="relative z-20 aspect-video w-full cursor-pointer  object-contains "
      />

      <CardHeader>
        <CardTitle className='line-clamp-2 cursor-pointer leading-tight' onClick={() => window.open((datatotoggle))}>{title}</CardTitle>
        <CardDescription className='line-clamp-4'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className=' flex flex-row justify-between items-center'>
        <Badge
          variant="secondary"
          className="cursor-pointer"
          onClick={() => window.open(datatotoggle)}
        >
          {Source}
        </Badge>
        <Button className="cursor-pointer" onClick={() => window.open((datatotoggle))} >Read More </Button>
      </CardFooter>
    </Card>
  )
}