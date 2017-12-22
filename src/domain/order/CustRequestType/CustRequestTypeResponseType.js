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

const CustRequestTypeResponseType = new GraphQLObjectType({
  name: 'CustRequestTypeResponseType',
  description: 'response type for CustRequestType',

  fields: () => ({
    custRequestTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {CustRequestTypeResponseType};
    