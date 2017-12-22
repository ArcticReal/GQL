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

const PartyNeedResponseType = new GraphQLObjectType({
  name: 'PartyNeedResponseType',
  description: 'response type for PartyNeed',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    datetimeRecorded: {type: GraphQLString},
    description: {type: GraphQLString},
    needTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyNeedId: {type: GraphQLString},
    partyTypeId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    visitId: {type: GraphQLString}
  })
});

export {PartyNeedResponseType};
    