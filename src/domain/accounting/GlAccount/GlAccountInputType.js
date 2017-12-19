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

const GlAccountInputType = new GraphQLInputObjectType({
  name: 'GlAccountInputType',
  description: 'input type for GlAccount',

  fields: () => ({
    accountCode: {type: GraphQLString},
    accountName: {type: GraphQLString},
    description: {type: GraphQLString},
    externalId: {type: GraphQLString},
    glAccountClassId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    glResourceTypeId: {type: GraphQLString},
    glXbrlClassId: {type: GraphQLString},
    parentGlAccountId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {GlAccountInputType};
    