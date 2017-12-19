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

const CommContentAssocTypeInputType = new GraphQLInputObjectType({
  name: 'CommContentAssocTypeInputType',
  description: 'input type for CommContentAssocType',

  fields: () => ({
    commContentAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CommContentAssocTypeInputType};
    