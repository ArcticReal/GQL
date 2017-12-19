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

const PartyQualInputType = new GraphQLInputObjectType({
  name: 'PartyQualInputType',
  description: 'input type for PartyQual',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyQualTypeId: {type: GraphQLString},
    qualificationDesc: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    title: {type: GraphQLString},
    verifStatusId: {type: GraphQLString}
  })
});

export {PartyQualInputType};
    