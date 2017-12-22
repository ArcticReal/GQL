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

const CustRequestResolutionResponseType = new GraphQLObjectType({
  name: 'CustRequestResolutionResponseType',
  description: 'response type for CustRequestResolution',

  fields: () => ({
    custRequestResolutionId: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CustRequestResolutionResponseType};
    