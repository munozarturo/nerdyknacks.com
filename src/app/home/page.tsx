import { darcula, ocean } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { HTMLAttributes } from "react";
import Markdown from "react-markdown";
import { PageContent } from "@/components/page-content";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Home() {
    const simpleMd = `# the future of urban gardening\n\n## how changing times lead to changing gardens\n\n### #urbangardening #sustainability #innovation #greenliving\n\nUrban gardening, a practice once seen as a hobby or an aesthetic pursuit for city dwellers, has rapidly evolved into a pivotal movement at the forefront of sustainable urban development. In recent years, we have witnessed a significant transformation in how people interact with their urban environments. No longer limited to traditional rural settings, agriculture is finding a new and promising frontier in the heart of our cities. This shift towards urban gardening is not just a passing trend; it represents a fundamental change in our approach to food production, community building, and environmental conservation.\n\n~~~python\nimport http.server\nimport socketserver\n\nPORT = 8000\n\nclass MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):\n    def do_GET(self):\n        if self.path == '/':\n            self.path = 'index.html'\n        return http.server.SimpleHTTPRequestHandler.do_GET(self)\n\n# Set the Handler to the custom class\nHandler = MyHttpRequestHandler\n\n# Create an object of the above class\nwith socketserver.TCPServer(("", PORT), Handler) as httpd:\n    print("Serving at port", PORT)\n    httpd.serve_forever()\n~~~\n\nThe scope of urban gardening has expanded dramatically from its humble beginnings. What started as potted plants on balconies and backyard vegetable patches has blossomed into a diverse array of gardening practices, including community gardens, rooftop farms, and even indoor vertical farming. These green spaces are becoming integral to urban planning, serving as vital lungs to our concrete-bound cities. They offer a refreshing contrast to the steel and glass that dominate urban landscapes, providing much-needed greenery that enhances the aesthetic appeal of cities. But their significance extends far beyond mere visual enhancement. Urban gardens have become crucial for sustainable living in dense urban areas, offering a practical solution to several challenges faced by city dwellers.\n\nThe rapid advancement of technology has been a catalyst in the growth of urban agriculture. Innovative methods like hydroponics, aquaponics, and aeroponics are revolutionizing how we grow food in limited spaces. These soil-less farming techniques allow for the efficient use of limited urban space, enabling the cultivation of a wide variety of crops in confined areas. This is particularly important in cities where space is at a premium. Furthermore, these methods can be more water-efficient than traditional farming, a crucial consideration in urban areas where water resources can be scarce. By leveraging technology, urban farmers can overcome many of the traditional challenges associated with agriculture, such as variable weather conditions and pest control, thus ensuring a more consistent and sustainable yield.\n\nThe benefits of urban gardening extend well beyond environmental concerns and venture deeply into social and mental health realms. Community gardens, for instance, are more than just shared spaces for cultivating plants; they are vibrant hubs for community engagement and social interaction. These gardens often become the heart of a community, fostering a sense of belonging and collective responsibility among residents. They serve as spaces for education, where people of all ages can learn about sustainable living, nutrition, and the importance of environmental stewardship.\n\nMoreover, the act of gardening itself has been linked to numerous mental health benefits. In a world where urban stress and disconnection from nature are growing concerns, gardening offers a therapeutic escape. It provides an opportunity for physical activity, relaxation, and mindfulness. The simple act of nurturing a plant from seed to harvest can be incredibly satisfying and grounding, offering a sense of achievement and a connection to the cycle of life. This connection to nature, often lost in the hustle of city life, is vital for our mental wellbeing.\n\n~~~python\nimport os\nimport shutil\n\ndef organize_directory(path):\n    for item in os.listdir(path):\n        if os.path.isfile(os.path.join(path, item)):\n            file_extension = item.split('.')[-1]\n            new_dir = os.path.join(path, file_extension)\n\n            if not os.path.exists(new_dir):\n                os.makedirs(new_dir)\n\n            shutil.move(os.path.join(path, item), os.path.join(new_dir, item))\n\ndirectory_to_organize = '/path/to/your/directory'  # Replace with your directory path\norganize_directory(directory_to_organize)\n~~~\n\nPerhaps one of the most critical aspects of urban gardening is its role in addressing urban food security. As the global population continues to urbanize, and as the effects of climate change increasingly impact traditional agricultural practices, the ability to grow food in urban areas is becoming more important. Urban gardens can provide fresh, locally grown produce, reducing the need for transportation and the associated carbon emissions. This local production not only contributes to a reduced environmental footprint but also ensures a supply of fresh and nutritious food, which is often lacking in urban areas, especially those classified as food deserts.\n\nMoreover, urban gardening empowers individuals and communities. It gives city residents a degree of control over their food sources, fostering self-reliance and resilience. In times of economic or environmental stress, this can be incredibly important. Urban gardens can also be a source of income or savings for families by reducing the amount of money spent on groceries.\n\nThe Road Ahead: Urban Gardening in Future City Planning\nLooking to the future, the role of urban gardening in city planning and development is poised to become even more significant. As cities continue to grow and face environmental challenges, integrating green spaces into urban design will be crucial. This integration involves not just the creation of new green spaces but also the innovative use of existing urban landscapes. Rooftops, walls, and even abandoned lots can be transformed into productive green spaces.\n\nThe future of urban gardening also lies in its potential to be a driving force for sustainability. By promoting biodiversity, improving air and soil quality, and contributing to the reduction of urban heat islands, urban gardens play a critical role in the ecological health of cities. Moreover, as the awareness of environmental issues grows, urban gardening can become a powerful tool for education and advocacy, inspiring more sustainable lifestyles and policies.\n`;

    return (
        <PageContent>
            <Markdown
                className="flex flex-col gap-2"
                components={{
                    h1: (props: HTMLAttributes<HTMLHeadingElement>) => {
                        return (
                            <h1 className="text-5xl font-bold">
                                {props.children}
                            </h1>
                        );
                    },
                    h2: (props: HTMLAttributes<HTMLHeadingElement>) => {
                        return (
                            <h2 className="text-2xl font-regular">
                                {props.children}
                            </h2>
                        );
                    },
                    h3: (props: HTMLAttributes<HTMLHeadingElement>) => {
                        return (
                            <h3 className="text-lg font-regular">
                                {props.children}
                            </h3>
                        );
                    },
                    p: (props: HTMLAttributes<HTMLParagraphElement>) => {
                        return (
                            <p className="text-lg font-regular">
                                {props.children}
                            </p>
                        );
                    },
                    code: (props: HTMLAttributes<HTMLPreElement>) => {
                        const { children, className, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || "");

                        const customStyle: React.CSSProperties = {};

                        return match ? (
                            <div className="bg-secondary-500 rounded-md border-2 flex flex-col my-2 mx-4">
                                <div className="bg-primary-500 text-secondary-500 p-2 font-bold font-sans">
                                    {match[1]}
                                </div>
                                <SyntaxHighlighter
                                    className="p-2"
                                    language={match[1]}
                                    wrapLines={true}
                                    wrapLongLines={true}
                                    PreTag="div"
                                    children={String(children).replace(
                                        /\n$/,
                                        ""
                                    )}
                                    customStyle={customStyle}
                                ></SyntaxHighlighter>
                            </div>
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {simpleMd}
            </Markdown>
        </PageContent>
    );
}
