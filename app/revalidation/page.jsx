import { revalidatePath, unstable_noStore as noStore } from 'next/cache';
import { Card } from '../../components/card';
import { Markdown } from '../../components/markdown';
import { SubmitButton } from '../../components/submit-button';

export const dynamic = 'force-static';

export const metadata = {
    title: 'Revalidation'
};

const explainer = `
This page demonstrates Incremental Static Regeneration (ISR) with manual revalidation.
`;

export default function Page() {
    noStore();
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1>Revalidation</h1>
                <Markdown content={explainer} />
            </section>
            <Card title="Revalidate the home page">
                <form action={async () => {
                    'use server';
                    revalidatePath('/');
                }}>
                    <SubmitButton>Revalidate</SubmitButton>
                </form>
            </Card>
        </div>
    );
}
