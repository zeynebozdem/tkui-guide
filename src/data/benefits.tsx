import { FiBarChart2, FiTarget, FiTrendingUp } from "react-icons/fi";
import Image from "next/image";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Modularity",
        description: "We offer a component system that balances aesthetics and functionality, creating user-friendly interfaces.",
        bullets: [
            {
                title: "Consistent Experience",
                description: "Ensures a seamless and unified digital experience across all platforms.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Scalable Design",
                description: "Adapts to all screen sizes, providing a flexible and reusable structure.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Efficient Development",
                description: "Accelerates development processes while maintaining brand identity.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/seatmap.png"
    }
]