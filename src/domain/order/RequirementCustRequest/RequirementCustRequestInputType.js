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

const RequirementCustRequestInputType = new GraphQLInputObjectType({
  name: 'RequirementCustRequestInputType',
  description: 'input type for RequirementCustRequest',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString},
    requirementId: {type: GraphQLString}
  })
});

export {RequirementCustRequestInputType};
    