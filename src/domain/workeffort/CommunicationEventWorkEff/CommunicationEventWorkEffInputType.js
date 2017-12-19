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

const CommunicationEventWorkEffInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventWorkEffInputType',
  description: 'input type for CommunicationEventWorkEff',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    description: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {CommunicationEventWorkEffInputType};
    