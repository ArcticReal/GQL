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

const CustRequestResolutionInputType = new GraphQLInputObjectType({
  name: 'CustRequestResolutionInputType',
  description: 'input type for CustRequestResolution',

  fields: () => ({
    custRequestResolutionId: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CustRequestResolutionInputType};
    