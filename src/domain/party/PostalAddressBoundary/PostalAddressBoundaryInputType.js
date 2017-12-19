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

const PostalAddressBoundaryInputType = new GraphQLInputObjectType({
  name: 'PostalAddressBoundaryInputType',
  description: 'input type for PostalAddressBoundary',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    geoId: {type: GraphQLString}
  })
});

export {PostalAddressBoundaryInputType};
    