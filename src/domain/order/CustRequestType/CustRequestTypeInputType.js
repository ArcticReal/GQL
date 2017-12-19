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

const CustRequestTypeInputType = new GraphQLInputObjectType({
  name: 'CustRequestTypeInputType',
  description: 'input type for CustRequestType',

  fields: () => ({
    custRequestTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {CustRequestTypeInputType};
    