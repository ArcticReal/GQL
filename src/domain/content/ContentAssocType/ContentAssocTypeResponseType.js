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

const ContentAssocTypeResponseType = new GraphQLObjectType({
  name: 'ContentAssocTypeResponseType',
  description: 'response type for ContentAssocType',

  fields: () => ({
    contentAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentAssocTypeResponseType};
    