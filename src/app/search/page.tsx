import SearchBar from "@/components/SearchBar";

export default function SearchPage() {
    return (
        <>
            <div className="pt-24 mx-8 md:mx-24 lg:mx-32">
                <SearchBar placeholder={"Search Keyword..."} />
            </div>
        </>
    );
}
