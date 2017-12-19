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

const ContentAssocTypeInputType = new GraphQLInputObjectType({
  name: 'ContentAssocTypeInputType',
  description: 'input type for ContentAssocType',

  fields: () => ({
    contentAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentAssocTypeInputType};
    