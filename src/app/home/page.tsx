import { PageContent } from "@/components/page-content";

export default function Home() {
    return (
        <PageContent>
            {[...Array(200)].map((_, i) => {
                return <p key={i}>{i} something</p>;
            })}
        </PageContent>
    );
}
