import { useNavigate } from "react-router"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
const Choices = () => {
  const navigate = useNavigate();
  const values = ['Science', 'Health', 'AI', 'Cricket', 'Movies',]
  return (
    values.map((items) => {
      return (
        <InteractiveHoverButton
          key={items}
          datatotoggle={() => {
            navigate(`/SortBy/${items}`, { replace: false });
          }}
        >
          {items}
        </InteractiveHoverButton>
      );
    })
  )
}

export default Choices;
