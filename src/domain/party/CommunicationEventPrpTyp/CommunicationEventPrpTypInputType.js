import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const CommunicationEventPrpTypInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventPrpTypInputType',
  description: 'input type for CommunicationEventPrpTyp',

  fields: () => ({
    communicationEventPrpTypId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {CommunicationEventPrpTypInputType};
    