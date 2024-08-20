import Image from 'next/image'
import Tasmina from '../pics/tasmina.jpg'
import Shazia from '../pics/shazia.jpg'


const About = () => {
    return (
        <main>
            {/* <div className="w-full"> */}
            <section class="bg-center bg-cover bg-no-repeat bg-[url('pics/group.jpg')] bg-gray-800 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-left lg:py-56 py-80">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl sm:px-8 lg:px-16">About us</h1>
                    <p class="mb-8 text-lg leading-loose font-normal text-gray-300 lg:text-xl sm:px-8 lg:px-16 text-left">Purposeful Learning Partnership is dedicated to transforming education through innovative training and support for educators and families. Our organization was founded with the belief that every teacher, school leader deserves access to the best resources and professional development opportunities, regardless of their school's financial status.
                        We provide tailored training programs for teachers and professional development for school heads. Our unique model offers free or low-cost training to low-income schools while providing premium services to well-performing schools, ensuring our programs are accessible to all. Additionally, as part of our welfare project, we offer free community sessions for parents on citizenship, character building, and education about parenting.
                        These sessions are designed to empower families and create a supportive environment that nurtures the holistic development of children. At Purposeful Learning Partnership, we believe that empowering educators and engaging parents are key to enhancing futures. By fostering a culture of continuous learning and improvement, we aim to create a positive and lasting impact on the educational landscape, and on society in general by benefiting students, teachers, parents, and communities alike. Join us in our mission to empower education and enhance futures for generations to come.</p>
                </div>
            </section>

            <section class="bg-center bg-no-repeat bg-cover bg-[url('pics/group2.jpg')] bg-gray-800 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl lg:py-56 py-80 text-center">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl sm:px-8 lg:px-16">Our Team</h1>
                    <p class="flex flex-row-reverse mb-5 text-lg leading-loose font-normal text-gray-300 lg:text-xl sm:px-8 lg:px-16 text-right">
                        <Image src={Tasmina} width={200} height={200} alt="Tasmina" className="" />
                    </p>
                    <div className="text-xl font-extrabold tracking-tight leading-none text-white md:text-xl lg:text-2xl sm:px-8 lg:px-16 text-right">
                        Tasmina Liaquat, Director
                    </div>
                    <div className="mb-8 text-lg leading-loose font-normal text-gray-300 lg:text-xl sm:px-8 lg:px-16 text-right">
                    Shazia Abbasi is currently working as a HST in the Education & Literacy Department Sindh. She is a PITE Certified Master Trainer with expertise in training professionals and youth, and a Research Scholar. She is a member of the PUAN - Pak US Alumni Network. She is a passionate about education and is dedicated to fostering an environment that encourages learning and growth.
                    </div>

                    <p class="flex flex-row mb-5 text-lg leading-loose font-normal text-gray-300 lg:text-xl sm:px-8 lg:px-16 text-right">
                        <Image src={Shazia} width={200} height={200} alt="Tasmina" className="" />
                    </p>
                    <div className="text-xl mb-2 font-extrabold tracking-tight leading-none text-white md:text-xl lg:text-2xl sm:px-8 lg:px-16 text-left">
                        Shazia Abbasi, Deputy Director
                    </div>
                    <div className="mb-8 text-lg leading-loose font-normal text-gray-300 lg:text-xl sm:px-8 lg:px-16 text-left">
                    Shazia Abbasi is currently working as a HST in the Education & Literacy Department Sindh. She is a PITE Certified Master Trainer with expertise in training professionals and youth, and a Research Scholar. She is a member of the PUAN - Pak US Alumni Network. She is a passionate about education and is dedicated to fostering an environment that encourages learning and growth.
                    </div>
                </div>
            </section>
            {/* </div> */}
        </main>
    )
}

export default About;