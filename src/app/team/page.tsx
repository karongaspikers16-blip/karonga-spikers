import { sanityClient, urlFor } from '@/lib/sanityClient';

export default async function TeamPage() {
  // Fetch all team players
  const team = await sanityClient.fetch(`*[_type == "team"]`);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Karonga Spikers Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((player: any) => (
          <div key={player._id} className="border rounded-lg p-4 text-center">
            {player.photo && (
              <img
                src={urlFor(player.photo).width(200).url()}
                alt={player.name}
                className="mx-auto mb-4 rounded"
              />
            )}
            <h2 className="text-xl font-semibold">{player.name}</h2>
            <p className="text-gray-600">{player.role}</p>
            <p>#{player.jersey}</p>
            <p className="mt-2">{player.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
