import CustomJumbotron from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import SearchControls from "./ui/SearchControls";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de Superhéroes"
        description="Descubre, explora y administra superhéroes y villanos"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
