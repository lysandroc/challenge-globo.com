import React from 'react';
import { Query } from 'react-apollo';
import { getAllParticipantes } from '../graphql/queries';

const Participantes = () => (
  <Query
    query={getAllParticipantes}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Buscando participantes...</p>;
      if (error) return <p>Houve um problema, infelizmente. :(</p>;

      return data.getAllParticipantes.map(({ _id, nome, idade }) => (
        <div key={_id}>
          <p>{`${nome}: ${idade}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default Participantes;