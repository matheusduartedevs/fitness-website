import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../../shared/types"
import { motion } from "framer-motion"
import HText from "../../shared/Htext"
import Benefit from "./Benefit"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: 'State of the Art Facilities',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, mollitia asperiores! Placeat doloribus praesentium labore.'
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit id omnis dolorem hic'
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: 'Expert and Pro Trainer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum aut unde ratione quis? Aut fuga voluptas eos minima omnis quibusdam magnam sint.'
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                <motion.div 
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}    
                >
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provie true care into each and every member.
                    </p>
                </motion.div>

                <motion.div 
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    variants={ container }
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Benefits