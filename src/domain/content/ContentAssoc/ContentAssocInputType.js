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

const ContentAssocInputType = new GraphQLInputObjectType({
  name: 'ContentAssocInputType',
  description: 'input type for ContentAssoc',

  fields: () => ({
    contentAssocPredicateId: {type: GraphQLString},
    contentAssocTypeId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    contentIdTo: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    leftCoordinate: {type: GraphQLInt},
    mapKey: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString},
    upperCoordinate: {type: GraphQLInt}
  })
});

export {ContentAssocInputType};
    