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

const CommContentAssocTypeResponseType = new GraphQLObjectType({
  name: 'CommContentAssocTypeResponseType',
  description: 'response type for CommContentAssocType',

  fields: () => ({
    commContentAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CommContentAssocTypeResponseType};
    