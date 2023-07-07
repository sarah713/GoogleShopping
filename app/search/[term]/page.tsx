import { redirect } from "next/navigation";

type Props = {
    searchParams: any;
    params: {
        term: string;
    }
}
function SearchPage({ searchParams, params: { term } }: Props) {
    if (!term) {
        redirect('/');
    }
    // fetch from API
    return (
        <div>

        </div>
    )
}

export default SearchPage;