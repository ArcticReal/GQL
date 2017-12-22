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

const RequirementCustRequestResponseType = new GraphQLObjectType({
  name: 'RequirementCustRequestResponseType',
  description: 'response type for RequirementCustRequest',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString},
    requirementId: {type: GraphQLString}
  })
});

export {RequirementCustRequestResponseType};
    