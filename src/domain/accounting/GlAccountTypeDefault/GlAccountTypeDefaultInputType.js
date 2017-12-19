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

const GlAccountTypeDefaultInputType = new GraphQLInputObjectType({
  name: 'GlAccountTypeDefaultInputType',
  description: 'input type for GlAccountTypeDefault',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {GlAccountTypeDefaultInputType};
    