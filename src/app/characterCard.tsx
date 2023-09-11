type CharacterCardProps = {
  character: Character;
};
export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div key={character.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={character.image}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-3 flex justify-center">
        <div>
          <h3 className="text-lg text-gray-700">
            <div>
              <span aria-hidden="true" className="absolute inset-0" />
              {character.name}
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
}
