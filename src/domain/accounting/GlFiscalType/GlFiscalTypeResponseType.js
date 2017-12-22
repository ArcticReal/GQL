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

const GlFiscalTypeResponseType = new GraphQLObjectType({
  name: 'GlFiscalTypeResponseType',
  description: 'response type for GlFiscalType',

  fields: () => ({
    description: {type: GraphQLString},
    glFiscalTypeId: {type: GraphQLString}
  })
});

export {GlFiscalTypeResponseType};
    