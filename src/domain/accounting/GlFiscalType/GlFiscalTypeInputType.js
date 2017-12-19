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

const GlFiscalTypeInputType = new GraphQLInputObjectType({
  name: 'GlFiscalTypeInputType',
  description: 'input type for GlFiscalType',

  fields: () => ({
    description: {type: GraphQLString},
    glFiscalTypeId: {type: GraphQLString}
  })
});

export {GlFiscalTypeInputType};
    